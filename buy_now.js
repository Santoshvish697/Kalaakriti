if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    const yourContractAbi = [];
    const yourContractAddress = '';
    // Request Metamask to enable accounts
    window.ethereum.enable()
      .then(accounts => {
        const userAccount = accounts[0];
        console.log('Connected to Metamask:', userAccount);

        // Handle Buy Now button click
        const buyNowButton = document.getElementById('buyNowButton');
        buyNowButton.addEventListener('click', async () => {
          // Call your contract method or perform actions on button click
          try {
            // Example: Send a transaction to the contract
            const contract = new web3.eth.Contract(yourContractAbi, yourContractAddress);
            const result = await contract.methods.yourContractMethod().send({
              from: userAccount,
              gas: 200000, // Adjust the gas limit accordingly
            });

            console.log('Transaction Result:', result);
            // Add any additional logic or UI updates here
          } catch (error) {
            console.error('Error:', error);
            // Handle errors or show error messages to the user
          }
        });
      })
      .catch(error => {
        console.error('Metamask enable error:', error);
        // Handle errors or show error messages to the user
      });
  } else {
    console.error('Metamask not detected');
    // Handle cases where Metamask is not installed
  }