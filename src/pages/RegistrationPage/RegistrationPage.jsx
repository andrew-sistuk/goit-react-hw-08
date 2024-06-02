import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegistrationPage.module.css'

export default function RegisterPage() {
  return (
    <section className={css['reg_page']}>
      <RegistrationForm />
    </section>
  );
}