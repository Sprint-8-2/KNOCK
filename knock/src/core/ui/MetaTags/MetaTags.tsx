import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title?: string;
  description?: string;
  imgSrc?: string;
  path?: string;
}

const DEPLOY_URL = process.env.REACT_APP_DEPLOY_PRODUCT_URL;

export default function MetaTags(props: MetaTagProps) {
  const url = props.path ? `${DEPLOY_URL}${props.path}` : DEPLOY_URL;
  const defaultTitle = '오픈마인드';
  const defaultDescription =
    '질문과 답변을 통해 마음을 열고 대화 나누는 소통 플랫폼';
  const defaultImage = '';

  return (
    <Helmet>
      <title>
        {(props.title && `${defaultTitle} - ${props.title}`) || defaultTitle}
      </title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || defaultTitle} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta property="og:image" content={props.imgSrc || defaultImage} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
