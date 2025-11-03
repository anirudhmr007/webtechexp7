import React, { useState } from "react";

export default function CalorieTracker() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [totalCalories, setTotalCalories] = useState(null);
  const [remainingCalories, setRemainingCalories] = useState(null);
  const [message, setMessage] = useState("");

  const handleCalculate = () => {
    // Validation
    if (
      !name ||
      !goal ||
      !breakfast ||
      !lunch ||
      !dinner ||
      !snacks
    ) {
      alert("Please fill in all fields!");
      return;
    }

    if (
      goal <= 0 ||
      breakfast < 0 ||
      lunch < 0 ||
      dinner < 0 ||
      snacks < 0
    ) {
      alert("Please enter only positive numbers!");
      return;
    }

    // Calculations
    const total =
      parseFloat(breakfast) +
      parseFloat(lunch) +
      parseFloat(dinner) +
      parseFloat(snacks);

    const remaining = parseFloat(goal) - total;

    setTotalCalories(total);
    setRemainingCalories(remaining);

    if (remaining < 0) {
      setMessage("You exceeded your daily calorie goal!");
    } else {
      setMessage("You are within your daily goal!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Calorie Tracker App</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Daily Calorie Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Breakfast Calories"
          value={breakfast}
          onChange={(e) => setBreakfast(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Lunch Calories"
          value={lunch}
          onChange={(e) => setLunch(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Dinner Calories"
          value={dinner}
          onChange={(e) => setDinner(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Snacks Calories"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleCalculate} style={styles.button}>
          Calculate Calories
        </button>
      </div>

      {totalCalories !== null && (
        <div style={styles.result}>
          <h3>Results:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Daily Calorie Goal:</strong> {goal} kcal</p>
          <p><strong>Total Calories Consumed:</strong> {totalCalories} kcal</p>
          <p>
            <strong>Remaining Calories:</strong>{" "}
            <span
              style={{
                color: remainingCalories < 0 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              {remainingCalories} kcal
            </span>
          </p>
          <p
            style={{
              color: remainingCalories < 0 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #aaa",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    textAlign: "left",
  },
};
