function ProfileCard({ title, handle, image, description }) {
  return (
    <div className="card pt-5">
      <div className="card-image has-text-centered">
        <figure className="image is-128x128 is-inline-block">
          <img className="is-centered" src={image} alt={title}/>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;