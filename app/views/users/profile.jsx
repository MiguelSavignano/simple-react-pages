import React from 'react'

export default class Profile extends React.Component {

  render() {
    return (
      <div>
        This it's the profile page see in views/users/profile.jsx <br />
        {this.props.name}'s profile
      </div>
    )
  }

}
