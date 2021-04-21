import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const handleChange = (e, state) => {
    const inputRegex = new RegExp(/[0-9]/);
    switch (state) {
      case "first":
        if (e.key === "Backspace") {
          changeValue(state, "");
        } else if (inputRegex.test(e.key)) {
          ref2.current.focus();
          changeValue(state, e.key);
        }
        break;
      case "second":
        if (e.key === "Backspace") {
          ref1.current.focus();
          changeValue(state, "");
        } else if (inputRegex.test(e.key)) {
          ref3.current.focus();
          changeValue(state, e.key);
        }
        break;
      case "third":
        if (e.key === "Backspace") {
          ref2.current.focus();
          changeValue(state, "");
        } else if (inputRegex.test(e.key)) {
          ref4.current.focus();
          changeValue(state, e.key);
        }
        break;
      case "fourth":
        if (e.key === "Backspace") {
          ref3.current.focus();
          changeValue(state, "");
        } else if (inputRegex.test(e.key)) {
          changeValue(state, e.key);
        }
        break;
      default:
    }
  };

  const changeValue = (state, value) => {
    return setValues({ ...values, [state]: value });
  };

  useEffect(() => {
    if (values.fourth) {
      setTimeout(() => {
        onSubmit();
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.fourth]);

  useEffect(() => {
    ref1.current.focus();
  }, []);

  const onSubmit = () => {
    alert(
      "success submit " +
        values.first.toString() +
        values.second.toString() +
        values.third.toString() +
        values.fourth.toString()
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 20,
      }}
    >
      <input
        type="text"
        ref={ref1}
        placeholder="*"
        style={styles.inputField}
        value={values.first}
        onChange={() => {}}
        maxLength={1}
        onKeyDown={(e) => handleChange(e, "first")}
      />

      <input
        type="text"
        ref={ref2}
        placeholder="*"
        style={styles.inputField}
        value={values.second}
        onChange={() => {}}
        maxLength={1}
        onKeyDown={(e) => handleChange(e, "second")}
      />
      <input
        type="text"
        ref={ref3}
        placeholder="*"
        style={styles.inputField}
        value={values.third}
        onChange={() => {}}
        maxLength={1}
        onKeyDown={(e) => handleChange(e, "third")}
      />
      <input
        type="text"
        ref={ref4}
        placeholder="*"
        style={styles.inputField}
        value={values.fourth}
        onChange={() => {}}
        maxLength={1}
        onKeyDown={(e) => handleChange(e, "fourth")}
      />
    </div>
  );
}

const styles = {
  inputField: {
    fontSize: 36,
    height: 50,
    width: 50,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "700",
  },
};

export default App;
