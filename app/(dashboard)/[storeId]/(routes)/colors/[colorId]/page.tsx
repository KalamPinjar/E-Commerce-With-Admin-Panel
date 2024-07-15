import prismadb from "@/lib/prismadb";
import { Color } from "./components/color-form";

const ColorForm = async ({ params }: { params: { colorId: string } }) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Color initialData={color} />
      </div>
    </div>
  );
};

export default ColorForm;
