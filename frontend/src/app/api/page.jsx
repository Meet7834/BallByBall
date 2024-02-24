import Link from 'next/link'
import React from 'react'

const API = () => {
  return (
    <div>
      <h1>API</h1>
      <Link href="/api/user">User</Link>
      <Link href="/api/team">Team</Link>
      <Link href="/api/match">Match</Link>
    </div>
  )
}

export default API