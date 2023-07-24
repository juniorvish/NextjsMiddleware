import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ProtectedRoute() {
  const [ session, loading ] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/api/holaplex')
    }
  }, [session, loading, router])

  if (loading) return null

  if (!loading && !session) return <p>Access Denied</p>

  return (
    <div>
      <h1>Protected Route</h1>
      <p>You are viewing a protected route because you own the required NFT.</p>
    </div>
  )
}