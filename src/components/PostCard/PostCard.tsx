interface IPostCard {
  imgUrl: string;
  title: string;
  date: string;
  text: string;
}
function PostCard({ imgUrl, date, text, title }: IPostCard) {
  return (
    <div className="post-card">
      <img className="post-image" src={imgUrl} alt="" />
      <h3 className="card-title">
        {title}
        <span className="post-date">{date}</span>
      </h3>
      <p className="card-descr">{text}</p>
    </div>
  );
}

export default PostCard;
