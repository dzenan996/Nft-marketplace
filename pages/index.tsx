import { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import NFTCard from "../components/NFTCard";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [nfts, setNfts] = useState<any[]>([]);

  useEffect(() => {
    const Pi = (window as any).Pi;
    if (Pi) {
      Pi.authenticate((user: any) => setUser(user));
    }
  }, []);

  const handleUpload = (nft: any) => {
    const id = Date.now();
    setNfts([...nfts, { ...nft, id }]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi NFT Marketplace</h1>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <UploadForm onUpload={handleUpload} />
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </>
      ) : (
        <p>Loading Pi user...</p>
      )}
    </div>
  );
}
