import style from './news.module.css';

type NewsProps = {
  title: string;
  content: string;
};

function News({ title, content }: NewsProps) {
  return (
    <div className={ style.container }>
      <h2 className={ style.title }>{title}</h2>
      <p className={ style.text }>
        {content}
      </p>
    </div>
  );
}

export default News;
