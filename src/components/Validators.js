import React from 'react';

const Validators = () => {
  const mainnetValidators = [
    {
      name: "Dymension",
      logo: "/logos/dymension.png",
      stakeLink: "#",
    },
  ];

  const testnetValidators = [
    {
      name: "Pell",
      logo: "/logos/pell.png",
      stakeLink: "https://explorer.hibunode.com/pell/staking/pellvaloper17lk7gcgsuht97ca6yqzdlfnpqpcly3qrmxrdsc",
    },
    {
      name: "Symphony",
      logo: "/logos/symphony.png",
      stakeLink: "https://explorer.hibunode.com/symphony/staking/symphonyvaloper1ec09t73g02yzkjlmy2vkj22tfxn6mmz449dzg4",
    },
    {
      name: "Warden",
      logo: "/logos/warden.png",
      stakeLink: "https://explorer.hibunode.com/warden/staking/wardenvaloper17sqmgr2fymaknmns9m2z4q4qpze2qth759cgn7",
    },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Mainnet */}
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '20px', display: 'inline-block' }}>
        <h2>Mainnet</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        {mainnetValidators.map((validator) => (
          <div
            key={validator.name}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '150px',
            }}
          >
            <img
              src={validator.logo}
              alt={validator.name}
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
            <h3>{validator.name}</h3>
            <p>{validator.description}</p>
          </div>
        ))}
      </div>

      {/* Testnet */}
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '20px', display: 'inline-block' }}>
        <h2>Testnet</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {testnetValidators.map((validator) => (
          <div
            key={validator.name}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '150px',
            }}
          >
            <img
              src={validator.logo}
              alt={validator.name}
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
            <h3>{validator.name}</h3>
            <p>{validator.description}</p>
            <a
              href={validator.stakeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Stake
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Validators;
