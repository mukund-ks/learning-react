function Profile(props) {
    const { name, name2 } = props; // destructuring props.
    
    return (
        <h1>
            The {name} and {name2} are lying to you.
        </h1>
    );
}

export default Profile;