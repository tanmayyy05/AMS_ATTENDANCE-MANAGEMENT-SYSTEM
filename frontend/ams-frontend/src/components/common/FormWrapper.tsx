import type { ReactNode } from "react";


interface FormWrapperProps {
  title?: string;
  children: ReactNode;
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {title && (
          <h2 className="text-2xl font-semibold text-center mb-6">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
