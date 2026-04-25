
const Location = ({
    coordinatesData,
}: {
    coordinatesData: { latitude: string; longitude: string } | undefined;
}) => {
    const { latitude, longitude } = coordinatesData || {
        latitude: 51.505,
        longitude: 41.09,
    };
    return (
        <iframe
            width="100%"
            height="200"
            loading="lazy"
            className="rounded-lg border"
            src={`https://maps.google.com/maps?q=${longitude},${latitude}&z=3&output=embed`}
        ></iframe>
    );
};

export default Location;
