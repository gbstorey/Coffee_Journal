import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./JournalForm.module.css";

function JournalForm() {
  return (
    <Form className={`${styles.formContainer}`}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={`${styles.titleLabel}`}>Notes</Form.Label>
        <Form.Control
          className={`${styles.textArea}`}
          type="password"
          placeholder="Write notes here"
          as="textarea"
          rows="5"
        />
      </Form.Group>

      <Button
        className={`${styles.button}`}
        variant="primary"
        type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default JournalForm;
