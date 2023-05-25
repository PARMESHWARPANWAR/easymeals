import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/client";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [session, loading] = useSession();
    const router = useRouter();

    useEffect(() => {
      // If the session is not valid or the user is not authenticated, redirect to the login page
      if (!session && !loading) {
        router.replace("/login");
      }
    }, [session, loading, router]);

    // Render the wrapped component if the user is authenticated
    return session ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
