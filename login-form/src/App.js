import { useForm } from "react-hook-form";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const eye = <FontAwesomeIcon icon={faEye} />;

function App() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="App.css row d-flex">
      <div className="col-md-8 pl-5 pr-5 ">
        <div className="form-styles">
          <h1> Let's setup your account</h1>
          <p>
            All ready have an account ? <a href="#"> sign in</a>{" "}
          </p>

          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              type="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-danger">Must provide be your name</span>
            )}
            <br />
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">
                Please enter a valid email address
              </span>
            )}
            <br />
            <select
              className="form-control"
              defa
              type="select"
              {...register("please choice one")}
            >
              <option value="developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="qaTester">QA tester</option>
            </select>
            <br />
            <div>
              <input
                className="form-control"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true, minLength: 8 })}
              />
              <span>
                <i onClick={togglePasswordVisiblity} className="toogle-icon">
                  {eye}
                </i>
              </span>

              {errors.password && (
                <span className="text-danger">
                  password must be 8 characters
                </span>
              )}
            </div>
            <br />
            <input className="form-control submit-type-style" type="submit" />
            <br />
            <p>
              By clicking the "Submit" button , you agree creating a free
              account , <a href="#">and to terms to service</a> and{" "}
            </p>{" "}
            <a href="#">pravicy policy</a>
          </form>
        </div>
      </div>
      <div className="col-md-4 form-right-side justify-content-center text-center">
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste alias
            numquam autem optio in quisquam itaque deserunt neque doloremque
            explicabo quam, aut eveniet eligendi cum? Magnam, consequuntur ab?
            Consectetur rerum iusto sit fugit officiis quas? Voluptatum
            doloribus quibusdam adipisci possimus. Voluptas quas tempora fugiat
            doloremque, modi corrupti eum accusamus quasi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
