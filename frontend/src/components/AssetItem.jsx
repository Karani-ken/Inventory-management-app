function AssetItem({asset}) {
  return (
    <div className="goal">
        <div>
            {new Date(asset.createdAt).toLocaleString
            ('en-US')}        
        </div>
        <h1>{asset.name}</h1>
        <h2>{asset.value}</h2>
        <p>{asset.description}</p>
    </div>
  )
}

export default AssetItem