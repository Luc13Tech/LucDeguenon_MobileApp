export const COLORS = {
  // Primary
  noir: '#020408',
  or: '#c9a84c',
  orLight: '#e8c97a',
  orDark: '#9a7a2e',

  // Secondary
  indigo: '#3d4fd6',
  indigoLight: '#818cf8',
  emerald: '#10b981',
  emeraldLight: '#34d399',
  rouge: '#ef4444',
  rougeLight: '#f87171',
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  purple: '#8b5cf6',
  purpleLight: '#a78bfa',

  // Neutral
  blanc: '#f0ede8',
  texte: '#d4cfc7',
  muted: '#7a7468',
  verre: 'rgba(255,255,255,0.03)',
  verreBord: 'rgba(255,255,255,0.07)',
  orVerre: 'rgba(201,168,76,0.06)',
  orBord: 'rgba(201,168,76,0.18)',
};

export const TYPOGRAPHY = {
  h1: {
    fontSize: 42,
    fontFamily: 'Playfair Display',
    fontWeight: '900',
    lineHeight: 1.1,
  },
  h2: {
    fontSize: 32,
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    lineHeight: 1.2,
  },
  h3: {
    fontSize: 24,
    fontFamily: 'Playfair Display',
    fontWeight: '700',
    lineHeight: 1.3,
  },
  h4: {
    fontSize: 18,
    fontFamily: 'Playfair Display',
    fontWeight: '600',
    lineHeight: 1.4,
  },
  body: {
    fontSize: 14,
    fontFamily: 'Space Grotesk',
    fontWeight: '400',
    lineHeight: 1.6,
  },
  caption: {
    fontSize: 12,
    fontFamily: 'Space Grotesk',
    fontWeight: '500',
    lineHeight: 1.5,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 36,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const SHADOW = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};
