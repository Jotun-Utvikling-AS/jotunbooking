import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const rooms = await getAllRooms();

  return (
    <>
      <Heading title='Tilgjengelige rom for booking' />

      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} />)
      ) : (
        <p>Ingen ledige rom tilgjengelig for øyeblikket.</p>
      )}
    </>
  );
}
