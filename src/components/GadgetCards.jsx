import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  
  const gadget = useLoaderData();
  const { category } = useParams();
  const [gadgetItem, setGadgetItem] = useState([]);
  console.log(gadgetItem);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...gadget].filter(
        (gadget) => gadget.category === category
      );
      setGadgetItem(filteredByCategory);
    } else {
      setGadgetItem(gadget);
    }
  }, [category, gadget]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {gadgetItem.map((gadgets) => (
        <Card key={gadgets.id} gadgets={gadgets}></Card>
      ))}
    </div>
  );
};

export default GadgetCards;