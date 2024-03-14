"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const GoogleMaps = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 10.773803,
        lng: 106.698296,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker_style = document.createElement("img");
      marker_style.src = "/marker.png";

      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        content: marker_style,
        title: "Uluru",
      });
    };
    initMap();
  }, []);

  return <div className="w-full h-80 mb-6 lg:h-[404px]" ref={mapRef} />;
};

export default GoogleMaps;
