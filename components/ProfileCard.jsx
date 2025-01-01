const ProfileCard = ({ user }) => {
    const { firstName, lastName, email, phoneNumber, gender } = user;
    return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Profile"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
          <p>Gender: {gender}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    );
  };

  export default ProfileCard;