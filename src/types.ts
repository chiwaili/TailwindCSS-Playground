export type CardType = 'stats' | 'product' | 'blog' | 'profile';

export interface CardState {
  cardType: CardType;

  // Container
  cardPadding: string;
  cardMargin: string;
  cardBg: string;
  cardBorder: string;
  cardRadius: string;
  cardShadow: string;
  spacing: string;

  // Hero / Header
  headerBg: string;
  headerHeight: string;

  // Primary Text (Title/Name)
  titleSize: string;
  titleWeight: string;
  titleColor: string;
  titleTracking: string;
  titleLeading: string;

  // Stats specific
  metaSize: string;
  metaLabelColor: string;
  metaValueColor: string;

  // Product specific
  priceSize: string;
  priceColor: string;
  priceWeight: string;
  badgeBg: string;
  badgeColor: string;
  buttonBg: string;
  buttonRadius: string;

  // Blog specific
  categoryColor: string;
  categoryWeight: string;
  excerptSize: string;
  excerptColor: string;

  // Profile specific
  avatarSize: string;
  avatarRadius: string;
  roleSize: string;
  roleColor: string;
  bioSize: string;
  bioColor: string;
  alignText: string;
}

export type HoveredElement = 'header' | 'title' | 'meta' | 'padding' | 'container' | 'price' | 'badge' | 'button' | 'category' | 'excerpt' | 'avatar' | 'role' | 'bio' | null;

export const DEFAULT_STATE_STATS: CardState = {
  cardType: 'stats',
  cardPadding: 'p-8',
  cardMargin: 'm-4',
  cardBg: 'bg-white',
  cardBorder: 'border-slate-200',
  cardRadius: 'rounded-2xl',
  cardShadow: 'shadow-xl',
  spacing: 'space-y-3',
  headerBg: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  headerHeight: 'h-44',
  titleSize: 'text-3xl',
  titleWeight: 'font-extrabold',
  titleColor: 'text-slate-600',
  titleTracking: 'tracking-tight',
  titleLeading: 'leading-tight',
  metaSize: 'text-base',
  metaLabelColor: 'text-slate-600',
  metaValueColor: 'text-slate-500',
  priceSize: 'text-2xl',
  priceColor: 'text-slate-900',
  priceWeight: 'font-bold',
  badgeBg: 'bg-emerald-100',
  badgeColor: 'text-emerald-700',
  buttonBg: 'bg-indigo-600',
  buttonRadius: 'rounded-lg',
  categoryColor: 'text-indigo-600',
  categoryWeight: 'font-semibold',
  excerptSize: 'text-base',
  excerptColor: 'text-slate-600',
  avatarSize: 'w-24 h-24',
  avatarRadius: 'rounded-full',
  roleSize: 'text-sm',
  roleColor: 'text-slate-500',
  bioSize: 'text-base',
  bioColor: 'text-slate-600',
  alignText: 'text-left',
};

export const DEFAULT_STATE_PRODUCT: CardState = {
  ...DEFAULT_STATE_STATS,
  cardType: 'product',
  cardPadding: 'p-6',
  headerHeight: 'h-64',
  headerBg: 'bg-slate-100', // placeholder for image area
  titleSize: 'text-xl',
  titleWeight: 'font-bold',
  titleColor: 'text-slate-900',
  spacing: 'space-y-4',
  alignText: 'text-left',
};

export const DEFAULT_STATE_BLOG: CardState = {
  ...DEFAULT_STATE_STATS,
  cardType: 'blog',
  headerHeight: 'h-48',
  titleSize: 'text-2xl',
  titleWeight: 'font-bold',
  titleColor: 'text-slate-900',
  spacing: 'space-y-3',
};

export const DEFAULT_STATE_PROFILE: CardState = {
  ...DEFAULT_STATE_STATS,
  cardType: 'profile',
  headerHeight: 'h-32',
  headerBg: 'bg-gradient-to-r from-blue-400 to-indigo-500',
  titleSize: 'text-2xl',
  titleWeight: 'font-bold',
  titleColor: 'text-slate-900',
  cardPadding: 'p-8',
  spacing: 'space-y-4',
  alignText: 'text-center',
};

export const DEFAULT_STATE = DEFAULT_STATE_STATS;
