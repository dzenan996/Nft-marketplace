import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const Pi = (window as any).Pi;
    if (Pi) {
      Pi.authenticate((user: any) => setUser(user));
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi NFT Marketplace</h1>
      {user ? <p>Dobrodošao, {user.username}</p> : <p>Učitavanje Pi naloga...</p>}
    </div>
  );
}
