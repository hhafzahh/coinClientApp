import { useState, useEffect } from "react";

//const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

function NewRequestBar({
  amount,
  coins,
  onAmtChange,
  onCoinsChange,
  onSubmitClick,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Target Amount"
        value={amount}
        onChange={(e) => {
          onAmtChange(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter coins separated by commas"
        value={coins}
        onChange={(e) => {
          onCoinsChange(e.target.value); // Ensure coinsChange is called with new value
        }}
      />

      <button onClick={onSubmitClick}>Submit</button>
    </div>
  );
}

function OutputList({ output }) {
  // console.log(output); //currently it doesnt work if u did incorrect input like 4,5 and 10 should return impossible combi

  return (
    <div>
      <p>Coins:</p>
      <p>
        {output.join(", ")} {/* Join elements with a comma */}
      </p>
      <p>Minimum Number of Coins = {output.length}</p>{" "}
    </div>
  );
}

function Change() {
  const [targetAmtTxt, setAmt] = useState(""); // State for message
  const [coinsTxt, setCoins] = useState(""); // State for owner name
  const [outputTxt, setOutput] = useState(null);
  //const [isSubmitting, setIsSubmitting] = useState(false);
  function handleSubmitClick() {
    submitNewMessage();
  }

  async function submitNewMessage() {
    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(
      // `http://127.0.0.1:8080/coins/getChange?targetAmount=${targetAmtTxt}&coins=${coinsTxt}`, //works for queryparam
      // `http://localhost:8080/coins/getChange`,
      `${baseUrl}/coins/getChange`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tell the backend that we are sending JSON
          Accept: "application/json", // Expect a JSON response from the backend
        },
        body: JSON.stringify({
          targetAmount: targetAmtTxt,
          coins: coinsTxt.split(",").map((coin) => parseFloat(coin.trim())), // Convert string to array of numbers
        }),
      }
    );

    const json = await response.json();
    console.log(json);
    setOutput(json);
  }

  return (
    <div>
      <NewRequestBar
        amount={targetAmtTxt}
        coins={coinsTxt}
        onAmtChange={setAmt}
        onCoinsChange={setCoins}
        onSubmitClick={handleSubmitClick}
      />
      {outputTxt && <OutputList output={outputTxt} />}
    </div>
  );
}

export default Change;
