export default function DemoSessionRadio({
  value,
  onChange,
}) {
  return (
    <div className="space-y-3">
      <label className="block font-medium">
        Free Demo Session
      </label>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="demoSession"
            value="yes"
            checked={value === "yes"}
            onChange={(e) =>
              onChange(e.target.value)
            }
          />
          Yes
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="demoSession"
            value="no"
            checked={value === "no"}
            onChange={(e) =>
              onChange(e.target.value)
            }
          />
          No
        </label>
      </div>
    </div>
  );
}