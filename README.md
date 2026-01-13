# Animal-Leg-Count

## Clarifying Questions

1. Are all animal names guaranteed to be lowercase and spelled exactly as listed?
   - Yes. All animal names will be lowercase and spelled exactly as listed if they exist in the code.

2. What should happen if the array is empty?
   - If the array is empty, the function returns `0` and may log an informational message.

3. What if an animal is not in the provided list (e.g., 'cow' or 'dragon')?
   - Unknown animals are ignored and may be optionally logged.

4. Should we ignore unknown animals or treat them as zero-leg animals?
   - Unknown animals will be ignored since their leg count is not defined.

5. Is the input always an array of strings, or do we need to validate input types?
   - The input will always be an array of strings.
