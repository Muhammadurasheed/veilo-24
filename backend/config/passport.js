const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const { generateAlias } = require('../utils/helpers');

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ id });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google OAuth strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists with this Google ID
      let user = await User.findOne({ 
        $or: [
          { googleId: profile.id },
          { email: profile.emails[0].value }
        ]
      });

      if (user) {
        // Update Google ID if not set
        if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }
        return done(null, user);
      }

      // Create new user with Google profile
      const userData = {
        googleId: profile.id,
        email: profile.emails[0].value,
        realName: profile.displayName,
        alias: generateAlias(),
        avatarIndex: Math.floor(Math.random() * 12) + 1,
        role: 'shadow',
        isVerified: true, // Google accounts are considered verified
        avatarUrl: profile.photos[0]?.value,
        registeredAt: new Date()
      };

      user = new User(userData);
      await user.save();

      console.log('New Google user created:', {
        id: user.id,
        email: user.email,
        alias: user.alias
      });

      done(null, user);
    } catch (error) {
      console.error('Google OAuth error:', error);
      done(error, null);
    }
  }));
} else {
  console.warn('⚠️ Google OAuth not configured - missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET');
}

module.exports = passport;