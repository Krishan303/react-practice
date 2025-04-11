import React, { useState } from 'react'


const TreeNode = ({node, level=0, globalExpand}) => {
    const [expanded, setExpanded] = useState(false)

    const hasChildren = node.children && node.children.length > 0;

    return(
        <div className={`ml-[${level * 1}rem]`}>
        <div onClick={() => setExpanded(!expanded)}
        >
         {hasChildren ? (globalExpand ? "[-]" : "[+]"): "[ ]"} Node {node.id}
        </div>
        { globalExpand && hasChildren && (
            <div>
                {node.children.map(child => (
                    <TreeNode key={child.id} node={child} level={level + 1} globalExpand={globalExpand}/>
                ))}
            </div>
        )}
    </div>
    )
}

const InterviewComponent = () => {
  const obj =  {
        id: 1,
        pid: null,
        children: [
          { 
            id: 2, 
            pid: 1,
            children: [
              { id: 4, pid: 2, children: [{ id: 6, pid: 4}]},
            ]
          },
          { id: 3, pid: 1, children: [{ id: 5, pid: 3}]},
        ]
      }

      const [globalExpand, setGlobalExpand] = useState(false);

  return (
    <div>
        <h1>Tree Structure</h1>
        <button onClick={() => setGlobalExpand(prev => !prev)}>
            {globalExpand ? 'Collapse All': "Expand All"}
        </button>
        <TreeNode node={obj} globalExpand={globalExpand}/>
    </div>
  )
}

export default InterviewComponent