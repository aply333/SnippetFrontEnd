import { Drawer } from "rsuite";
import { useForm } from "react-hook-form";
import { formStyles } from "./bottomNavConsts";

const NewCode = ({ show, toggleDrawer, setCodeData }) => {
  const NewCodeStyle = {
    width: "30%",
    marginLeft: "5rem",
    marginBottom: "3.7rem",
  };

  const { register, handleSubmit } = useForm();
  function onSubmitHandler(data) {
    if(data.title === "" || data.title === null){
        toggleDrawer()
    }else{
        setCodeData(data)
        toggleDrawer()
    }
  }

  return (
    <>
      <Drawer
        show={show}
        onHide={toggleDrawer}
        placement="bottom"
        style={NewCodeStyle}
      >
        <Drawer.Header>Add Code</Drawer.Header>
        <Drawer.Body>
          <form onSubmit={handleSubmit(onSubmitHandler)} style={formStyles}>
            <label>Code Section Name:</label>
            <input
              type="text"
              placeholder="enter name"
              name="title"
              ref={register}
            />
            <label>Description:</label>
            <textarea 
                placeholder="what is this sections function?"
                name="description"
                ref={register}/>
            <button className="primaryButton">Commit</button>
          </form>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default NewCode;
