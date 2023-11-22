export default function Video({ url }: { url: string }) {
  return (
    <div style={{
      margin: '20px auto',
      width: '100%',
      minHeight: '100px',
      backgroundColor: 'red'
    }}>
      <iframe width="560" height="315" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}