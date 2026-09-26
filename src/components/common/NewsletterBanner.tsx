export interface NewsletterBannerProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export function NewsletterBanner(props?: NewsletterBannerProps) {
  void props;
  // Блок рассылки «MORE TIMELESS STORIES» скрыт по запросу пользователя
  return null;
}
