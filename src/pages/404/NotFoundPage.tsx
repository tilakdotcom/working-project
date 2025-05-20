import { CustomButtonWrapper } from "@/components/common/CustomButtons";
import Heading from "@/components/common/Heading";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | YourSiteName</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist or has been moved."
        />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta
          property="og:description"
          content="Oops! This page doesn't exist. Return to the homepage."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-cream-200 to-gold-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center flex justify-center items-center flex-col">
          <span className="text-7xl mb-4 text-gray-500">
            <BiSearch />
          </span>

          <Heading>404</Heading>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to={"/"}>
            <CustomButtonWrapper className="bg-gradient-to-r from-gold-400 to-gold text-white font-medium flex items-center">
              <BiHomeAlt />
              Return Home
            </CustomButtonWrapper>
          </Link>
        </div>
      </div>
    </>
  );
}
