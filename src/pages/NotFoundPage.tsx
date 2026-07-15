import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { usePageMeta } from '../lib/useMeta';

export function NotFoundPage() {
  const { ui } = useI18n();
  usePageMeta('home', ui.notFound.title);

  return (
    <div className="not-found">
      <p className="eyebrow" aria-hidden="true">
        404
      </p>
      <h1>{ui.notFound.title}</h1>
      <p>{ui.notFound.text}</p>
      <p>
        <Link className="btn btn--primary" to="/">
          {ui.notFound.back}
        </Link>
      </p>
    </div>
  );
}
