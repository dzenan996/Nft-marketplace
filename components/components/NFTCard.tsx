export default function NFTCard({ nft }: any) {
  const handleBuy = () => {
    const Pi = (window as any).Pi;
    if (!Pi) return alert("Pi Browser is required!");

    Pi.createPayment({
      amount: parseFloat(nft.price),
      memo: `Buying NFT: ${nft.name}`,
      metadata: { nftId: nft.id },
      onReadyForServerApproval: (paymentId: any) => {
        console.log("Ready for server approval:", paymentId);
      },
      onReadyForServerCompletion: (paymentId: any, txid: any) => {
        console.log("Completed:", paymentId, txid);
      },
      onCancel: (paymentId: any) => {
        alert("Payment cancelled.");
      },
      onError: (error: any) => {
        alert("Error: " + error);
      }
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 20 }}>
      <h4>{nft.name}</h4>
      <img src={nft.image} alt={nft.name} width="200" />
      <p>{nft.description}</p>
      <p>Price: {nft.price} Pi</p>
      <button onClick={handleBuy}>Buy with Pi</button>
    </div>
  );
}
