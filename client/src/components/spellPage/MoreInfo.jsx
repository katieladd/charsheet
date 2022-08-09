import React from "react";

const MoreInfo = (props) => {
    const {moreInfo} = props;
    return (
            <div className="spell-information">
            <div className="name" key={moreInfo.name}>
            {moreInfo.name}
            </div>
            <div className="desc" key={moreInfo.name}>
            {moreInfo.desc.map((line) => (
                <li>{line}</li>
                ))}
            </div>
            <div className="higher-level">
            {moreInfo.higher_level
                ? moreInfo.higher_level.map((line) => <li>{line}</li>)
                : null}
                </div>
                <div className="range">{moreInfo.range}</div>
                <div className="components">
                {moreInfo.components.map((type) => (
                    <li>{type}</li>
                    ))}
                    </div>
                    <div className="material">
            {moreInfo.material ? moreInfo.material : null}
            </div>
            <div className="ritual">{moreInfo.ritual ? "true" : "false"}</div>
            <div className="duration">{moreInfo.duration}</div>
            <div className="concentration">
            {moreInfo.concentration ? "true" : "false"}
            </div>
            <div className="casting-time">{moreInfo.casting_time}</div>
            <div className="level">{moreInfo.level}</div>
            <div className="attack_type">{moreInfo.attack_type}</div>
            <div className="damage-type">{moreInfo.damage.damage_type.name}</div>
            {/* TODO: Fix!
            <div className="damage-at-higher-level">
            {moreInfo.damage
                ? { for (i = moreInfo.level; i <= 9; i++) {
                    <li>{`${i} `}{moreInfo.damage.damage_at_slot_level.i}</li>
                }}
                : null}
            </div> */}
            <div className="school">{moreInfo.school.name}</div>
            <div className='classes'>
            {moreInfo.classes
                ? moreInfo.classes.map((c) => <li>{c.name}</li>)
                : null}
                </div>
                <div className='subclasses'>
                {moreInfo.subclasses
                    ? moreInfo.subclasses.map((subclass) => <li>{subclass.name}</li>)
                    : null}
                    </div>
                </div>
                )
}


export default MoreInfo;