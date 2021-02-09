import { Drawer } from "rsuite";
import { useForm } from "react-hook-form";
import { formStyles } from "./bottomNavConsts";

const NewProject = ({ show, toggleDrawer, setNewProjectData }) => {
  const newProjectStyles = {
    width: "30%",
    marginBottom: "3.7rem",
  };

  const { register, handleSubmit } = useForm();
  function onSubmitHandler(data) {
    if (data.title === "" || data.title === null) {
      toggleDrawer();
    } else {
      setNewProjectData(data);
      toggleDrawer();
    }
  }

  return (
    <>
      <Drawer
        show={show}
        onHide={toggleDrawer}
        placement="bottom"
        style={newProjectStyles}
      >
        <Drawer.Header>New Project</Drawer.Header>
        <Drawer.Body>
          <form onSubmit={handleSubmit(onSubmitHandler)} style={formStyles}>
            <label>Create New Project</label>
            <input
              type="text"
              name="title"
              placeholder="enter name"
              ref={register}
            />
            <button className="primaryButton">Commit</button>
          </form>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default NewProject;
