import { useState } from "react";
import { Bookmark } from "../Bookmark";
import { MdUnsubscribe } from "react-icons/md";
import { SubmitButton } from "../Button";
import { toast } from "sonner";

const NewsLetterComponent = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    const loadingToast = toast.loading("Subscribing...");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("formType", "newsletterForm");
      formData.append("email", email);

      const response = await fetch(import.meta.env.VITE_GOOGLESHEET_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed request");
      }

      toast.success("Subscribed successfully 🎉", {
        id: loadingToast,
      });

      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="max-w-442.5 mx-auto w-[93%] flex flex-col items-start justify-evenly md:px-20 gap-6">
        <div>
          <Bookmark
            title="Subscribe"
            icon={<MdUnsubscribe size={30} color="#ff6041" />}
            className="bg-white gap-3"
          />
        </div>

        <div className="self-center flex flex-col gap-6 md:gap-12 w-full items-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-medium">Stay Up to Date</p>
            <span className="inline-block w-25 h-1 bg-[#ff6041]"></span>
          </div>

          <div className="md:max-w-250 text-center text-[16px] font-medium">
            <p>
              Stay informed with expert insights, industry trends, and product
              updates delivered straight to your inbox.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center w-full justify-between gap-10 max-w-200"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="flex-1 px-4 outline-none rounded-full text-sm bg-white py-5 w-full disabled:opacity-60"
            />

            <SubmitButton
              title={loading ? "Submitting..." : "Submit"}
              classname="rounded-[25px]"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterComponent;
