/**
 * Design System and Theme Tokens for CineTrack
 * Supports Dark Theme (Cinema aesthetics) and Light Theme
 */

export const Colors = {
  dark: {
    background: '#121212',
    surface: '#1E1E1E',
    surfaceVariant: '#2A2A2A',
    primary: '#E50914', // CineTrack Red Accent
    primaryVariant: '#B81D24',
    secondary: '#FFC107', // Gold rating star accent
    textPrimary: '#FFFFFF',
    textSecondary: '#AAAAAA',
    textMuted: '#666666',
    border: '#333333',
    card: '#1F1F1F',
    error: '#CF6679',
    success: '#03DAC6',
  },
  light: {
    background: '#F8F9FA',
    surface: '#FFFFFF',
    surfaceVariant: '#F1F3F5',
    primary: '#E50914',
    primaryVariant: '#B81D24',
    secondary: '#F59E0B',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    border: '#E5E7EB',
    card: '#FFFFFF',
    error: '#DC2626',
    success: '#10B981',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const Typography = {
  header: {
    fontSize: 28,
    fontWeight: '700' as const,
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500' as const,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
  },
};
