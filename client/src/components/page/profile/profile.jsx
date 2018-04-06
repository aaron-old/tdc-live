import React, {Component} from 'react';

class Profile extends Component {
    componentWillMount() {
        console.log(this.props);
        this.setState({profile: {}});
        const {userProfile, getProfile} = this.props.auth;
        if(!userProfile) {
            getProfile((err, profile) => {
                this.setState({profile});
            });
        } else {
            this.setState({profile: userProfile})
        }
    }
    render() {
        const {profile} = this.state;
        console.log(profile);
        return (
            <div className="container">
                <div className="profile-area">
                    <h1>{profile.name}</h1>
                </div>
            </div>
        )
    }
}

export default Profile;