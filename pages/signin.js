{!session && (
    <>
      Not signed in <br/>
      <button onClick={signIn}>Sign In</button>
    </>

  )}
  {
    session &&(
      <>
      Signed in as {session.user.email}<br />
      <button onClick={signOut}>sign out</button>
      </>
    )
  }