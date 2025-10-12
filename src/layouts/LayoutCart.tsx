import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProcessBar from "../components/ProcessBar/ProcessBar";


type CartLayoutProps = {
  step: number;
  breadcrumb: { label: React.ReactNode; link?: string }[];
  children:React.ReactNode;
};

const CartLayout: React.FC<CartLayoutProps> = ({ step, breadcrumb, children }) => {
    return (
        <>
                  {/* Breadcrumb */}
      <Breadcrumb paths={breadcrumb} />
       <div className="container mx-auto px-4">

      {/* Process Bar */}
      <div className="my-6">
        <ProcessBar step={step} />
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
      </>
   
  );
};

export default CartLayout;
