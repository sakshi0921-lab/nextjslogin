import LoginForm from "@/components/LoginForm"; // Adjust the path based on your structure

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // Push the content to the left
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4", // Set a background color for the left side
        position: "relative",
      }}
    >
      <LoginForm />
      <div
        style={{
          backgroundImage: "url('/logo.jpg')", // Your image path
          backgroundSize: "cover", // Ensure the image stays within its bounds
          backgroundPosition: "right", // Push the image to the right
          backgroundRepeat: "no-repeat",
          position: "absolute",
          right: 0, 
          top: 0,
          bottom: 0,
          width: "72%", // Reduce the size of the image area
          height: "100%",
        }}
      />
    </div>
  );
}
