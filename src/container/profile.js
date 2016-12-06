import React, { Component } from 'react'

import Header from 'component/header'
import Section from 'component/section'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Profile" />
        <Section
          title="Notifications"
          content={ <div /> }
        />
        <Section
          title="Change Profile Picture"
          subtitle="This will be your image in Autodesk community settings, such as forums."
          content={ <div /> }
        />
        <Section
          title="Community Information"
          subtitle="This information may be visible to other members of Autodesk community.(e.g. on a profile page)"
          content={ <div /> }
        />
        <Section
          title="Account Information"
          subtitle="This information will not be visible to the public."
          content={ <div /> }
        />
        <Section
          title="Change Password"
          subtitle="Increase the security of your account by changing your password regularly."
          content={ <div /> }
        />
        <Section
          title="Language"
          subtitle="Select your language preference."
          content={ <div /> }
        />
      </div>
    )
  }
}
