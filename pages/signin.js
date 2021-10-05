{!session && (
    <>
      Not signed in <br/>
      <a href='/' onClick={signIn}>Sign In</a>
    </>

  )}
  {
    session &&(
      <>
      Signed in as {session.user.email}<br />
      <a href='/' onClick={signOut}>sign out</a>
      </>
    )
  }