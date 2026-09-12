import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <Link
          to="/"
          activeProps={{
            className: "text-lg",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        {" "}
        <Link
          to="/about"
          activeProps={{
            className: "text-lg",
          }}
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
