import ForestBackground from '@/components/ForestBackground';

export default function StitchBackground() {
  return (
    <>
      <div className="stitch-body-bg" aria-hidden="true" />
      <div className="atmospheric-mist" aria-hidden="true">
        <div className="moonlight" />
      </div>
      <ForestBackground />
    </>
  );
}
