from pathlib   import Path
from shutil    import rmtree


THIS_DIR     = Path(__file__).parent
RESULTS_FILE = THIS_DIR / "results.txt"

RESULTS_FILE_CLEANED = THIS_DIR / "results-cleaned.txt"
RESULTS_FILE_CLEANED = RESULTS_FILE


with RESULTS_FILE.open(mode = "r") as f:
    results = f.read()

ALL_RESULTS = []

for line in results.split("\n"):
    line = line.strip()

    if not line:
        continue

    print(line)
    ALL_RESULTS.append(
        tuple(
            int(f.strip())
            for f in line[1:-1].split(',')
        )
    )


ALL_RESULTS = list(
    map(list, set(ALL_RESULTS))
)
ALL_RESULTS.sort()


ALL_RESULTS = list(
    map(repr, ALL_RESULTS)
)

ALL_RESULTS.append('')

with RESULTS_FILE_CLEANED.open(mode = "w") as f:
    f.write("\n".join(ALL_RESULTS))